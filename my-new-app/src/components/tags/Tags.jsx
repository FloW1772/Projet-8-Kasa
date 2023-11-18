export default function Tags({ tags }) {
  // Vérifiez si tags est vide
  if (!tags) {
    // Si tags est vide, affichez un message
    return <div>Aucun tag</div>;
  }

  // Tags n'est pas vide, continuez comme prévu
  return (
    <div>
      {tags.map((tags, index) => (
        <Tags key={index} tag={tags} />
      ))}
    </div>
  );
}
