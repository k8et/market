import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import firebaseApp from "../firebase/config";

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [newProduct, setNewProduct] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        category: '',
        screenDiagonal: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const productsCollection = collection(db, 'Products');
                const productsSnapshot = await getDocs(productsCollection);
                const productsData = productsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setProducts(productsData);
            } catch (error) {
                console.error('Ошибка получения продуктов:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const subscribersCollection = collection(db, 'Subscribers');
                const subscribersSnapshot = await getDocs(subscribersCollection);
                const subscribersData = subscribersSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setSubscribers(subscribersData);
            } catch (error) {
                console.error('Ошибка получения подписчиков:', error);
            }
        };

        fetchSubscribers();
    }, []);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setNewProduct({ ...newProduct, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const addProduct = async () => {
        try {
            const db = getFirestore(firebaseApp);
            const productsCollection = collection(db, 'Products');
            await addDoc(productsCollection, newProduct);
            setNewProduct({
                image: '',
                title: '',
                description: '',
                price: '',
                category: '',
                screenDiagonal: ''
            });
        } catch (error) {
            console.error('Ошибка добавления продукта:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const db = getFirestore(firebaseApp);
            const productRef = doc(db, 'Products', productId);
            await deleteDoc(productRef);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Ошибка удаления продукта:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <h2 className="text-xl font-bold mb-2">Add New Product</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full rounded border px-4 py-2 mb-2" />
            <input type="text" className="w-full rounded border px-4 py-2 mb-2" placeholder="Title" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
            <input type="text" className="w-full rounded border px-4 py-2 mb-2" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
            <input type="text" className="w-full rounded border px-4 py-2 mb-2" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
            <input type="text" className="w-full rounded border px-4 py-2 mb-2" placeholder="Category" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} />
            <input type="text" className="w-full rounded border px-4 py-2 mb-2" placeholder="Screen Diagonal" value={newProduct.screenDiagonal} onChange={e => setNewProduct({ ...newProduct, screenDiagonal: e.target.value })} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addProduct}>Add Product</button>
            <h2 className="text-xl font-bold my-4">Subscribers</h2>
            <ul className={"flex flex-wrap gap-10"}>
                {subscribers.map(subscriber => (
                    <li key={subscriber.id}>
                        Email: {subscriber.email}
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold my-4">Products</h2>
            <ul className={"flex flex-wrap gap-10"}>
                {products.map(product => (
                    <li key={product.id} className="flex flex-col justify-between w-36 mb-4">
                        <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded mr-4" />
                        <div className={"flex flex-col justify-between  h-full "}>
                            <h3 className="text-lg font-bold">{product.title}</h3>
                            <p>{product.description}</p>
                            <p className="text-gray-700">Price: ${product.price}</p>
                            <p className="text-gray-700">Category: {product.category}</p>
                            <p className="text-gray-700">Screen Diagonal: {product.screenDiagonal}</p>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => deleteProduct(product.id)}>Delete Product</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
