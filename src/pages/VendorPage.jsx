import { Link, useParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import { useAuth } from '../hooks/useAuth.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

const ALL_TAGS = ['halal', 'vegetarian', 'spicy', 'seafood']

function VendorPage() {
  const { id } = useParams()
  const { user } = useAuth()
  const { vendors, loading, error, reload } = useVendors()

  // ticked tags: saved per user; guests can filter but nothing is saved
  const [selectedTags, setSelectedTags] = useLocalStorage(
    'ce-diet-' + (user?.uid ?? 'guest'),
    [],
    Boolean(user),
  )

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }
  
  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => String(v.id) === id)

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">
          There is no vendor called “{id}”. <Link to="/">Back to vendors</Link>
        </p>
      </section>
    )
  }

  // keep only items that have ALL the ticked tags
  const shown = vendor.menu.filter((item) =>
    selectedTags.every((tag) => (item.tags ?? []).includes(tag)),
  )

  return (
    <section>
      <p>
        <Link to="/">← All vendors</Link>
      </p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>

      <fieldset className="tag-filter">
        <legend>Dietary tags</legend>
        {ALL_TAGS.map((tag) => (
          <label key={tag} className="tag-option">
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => toggleTag(tag)}
            />{' '}
            {tag}
          </label>
        ))}
      </fieldset>

      <MenuList items={shown} />
    </section>
  )
}

export default VendorPage