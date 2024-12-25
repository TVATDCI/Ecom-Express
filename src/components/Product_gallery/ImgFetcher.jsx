import { useState, useEffect, useRef } from "react";

const ImgFetcher = ({ count = 3, onImagesFetched }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return;

        const fetchImages = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`);
                const data = await response.json();
                const imgUrls = data.map(product => product.image);
                setImages(imgUrls);
                const mainImageId = data[0].id; // Extract the ID of the main image
                onImagesFetched(imgUrls, mainImageId); // Pass the fetched images and main image ID to the parent component
                fetchedRef.current = true;
            } catch (err) {
                setError(err.message);
            }
        };

        fetchImages();
    }, [count, onImagesFetched]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return null; // Return null as this component does not render anything itself
};

export default ImgFetcher;