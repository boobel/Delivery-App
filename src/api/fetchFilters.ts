const fetchFilters = async () => {
    const db = await fetch("http://localhost:3000/filters")
    const data = await db.json();
    return data;
}

export{fetchFilters}


