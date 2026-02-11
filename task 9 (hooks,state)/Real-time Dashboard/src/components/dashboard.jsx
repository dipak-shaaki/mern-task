import { useState, useMemo } from 'react'
import { usefetch } from '../hooks/useFetch.js'
import Searchbar from './searchBar.jsx'
import DataTable from './dataTable.jsx'
import Stats from './stats.jsx'
import { useDebounce } from "../hooks/useDebounce";


const dashboard = () => {

    const { data, loading } = usefetch('https://jsonplaceholder.typicode.com/posts')
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm);
    const filteredData = useMemo(() => {
        return data.filter((item) =>
            item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [data, debouncedSearch]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
                    <p className="text-center text-slate-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-500 px-4 py-10">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
                <h1 className="mb-6 font-semibold text-3xl">Real-time Dashboard</h1>
                <Searchbar value={searchTerm} onChange={setSearchTerm} />
                <Stats count={filteredData.length} />
                <DataTable data={filteredData} />
            </div>
        </div>
    );

    
}

export default dashboard
