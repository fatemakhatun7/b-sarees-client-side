import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';

const Products = () => {
    
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data    
        }
    });
    
    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div>
        <div className='text-center my-20'>
            <h2 className='text-2xl font-bold mb-2'>Do you want to add more products?</h2>
            <Link to='/addProduct' className="btn">Add Product</Link>
        </div>
            <h2 className='ml-20 my-10 font-bold text-xl'>Products categories</h2>
            <div className='flex justify-around my-10'>
                {
                    categories.map(product =>
                        <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.img} alt="saree" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.cate_name}</h2>
                        </div>
                        <div className='text-center mb-3'>
                            <Link to={`/categories/${product.cate_name}`} className="btn">See more</Link>
                        </div>
                    </div>  )
                }
            </div>
        </div>
    );
};

export default Products;