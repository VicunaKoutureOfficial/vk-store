import ProductCard from '@/components/ui/product-card'
import { Product } from '@/types'
import NoResults from '@/components/ui/no-results'

interface ProductListProps {
    title: string
    items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
    return (
        <div className="space-y-4 p-2 md:p-10">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 && <NoResults />}
            <div className="flex justify-center md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-4">
                {items.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
