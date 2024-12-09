import categoriesList from "../components/data/categories.json"

const FilterProjects = ({ setSearchTerm, setSelectedCategory }) => {

    let categoryOptions = categoriesList.map((category, index) => {

        return <option key={index} value={category.value}>{category.label}</option>
    })

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    <label labelclassName="input input-bordered flex items-center gap-2">
        {/* <input onChange(e) => setSearchTerm(e.target.value)} type="text" className="grow" placeholder=""/> */}
    </label>
    return (
        <div>
            <input
                type="text"
                id="search"
                placeholder="Search by title"
                onChange={handleSearchChange}
            />
            <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                {categoryOptions}
            </select>
        </div>

    );
};

export default FilterProjects;
