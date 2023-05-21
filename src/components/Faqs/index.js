import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="container">
      <div className="content">
        <h1>FAQs</h1>
        <ul className="unorder">
          {faqsList.map(each => (
            <FaqItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
