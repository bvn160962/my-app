import React, {useState, useEffect} from 'react'

function useQuery (url) {
    const [requestData, setRequestData] = useState()
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setRequestData(json))
            .then(json => console.log(json))
            .catch(e => {console.error(e)})
    }, [url])

    return [requestData];

}

export default useQuery