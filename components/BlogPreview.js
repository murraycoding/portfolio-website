export default function BlogPreview({ title, author, date, content, img }) {
  retrun (
    <div>
      <h2>{title}</h2>
      <h3>{date}</h3>
    </div>
  )
}