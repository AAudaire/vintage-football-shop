import { products } from "../data/products";

export default function Home() {
    return (
        <main>
            <h1>Vintage Football Shop</h1>
            <section>
                {products.map((product) => (
                    <article key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <strong>{product.price}€</strong>
                        <p>{product.description}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
