// import React, { useEffect, useState } from "react";

// function Pagina() {
//     const [posts, setPosts] = useState([]);
//     const [isLoad, setIsLoad] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);

//     useEffect(() => {
//         setIsLoad(true);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((data) => {
//                 setPosts(data);
//                 setIsLoad(false);
//             });

//     }, []);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <>
//             {isLoad ? (
//                 <div>
//                     <h1 className="text-center,text-primary">LOADING...</h1>
//                 </div>
//             ) : (
//                 <>
//                     <ul>
//                         {currentPosts.map((item) => (
//                             <li key={item.id}>
//                                 <span>{item.id}</span> <span>{item.title}</span>
//                             </li>
//                         ))}
//                     </ul>
//                     <ul className="pagination">
//                         {pageNumbers.map((number) => (

//                                 <a
//                                     onClick={() => paginate(number)}
//                                     href="#"
//                                 >
//                                     {number}
//                                 </a>

//                         ))}
//                     </ul>
//                 </>
//             )}
//         </>
//     );
// }

// export default Pagina;







import React, { useEffect, useState } from "react";
import Loading from "./Loading";


function Pagina() {

    let [loading, setloading] = useState(false)
    let [Post, setpost] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage, setpostsPerPage] = useState(10)



    useEffect(() => {
        setloading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setpost(data);
                let timer = setTimeout(() => {
                    setloading(false)
                }, 2000)
            });
    }, []);



    let lastindex = currentPage * postsPerPage
    console.log(lastindex);
    let firstindex = lastindex - postsPerPage
    console.log(firstindex);
    let currentposts = Post.slice(firstindex, lastindex)
    let pagenumbers = []


    // const totalPages = Math.ceil(Post.length / postsPerPage);


    // Array(totalPages).fill().forEach((_, index) => {
    //     console.log(totalPages);
    //     pagenumbers.push(index + 1);
    // });


    for(let i = 1; i <= Math.ceil(Post.length  / postsPerPage); i++ ) {
        pagenumbers.push(i)
    }


    function pgi(item) {
        // console.log(item);
        console.log(item);
        setCurrentPage(item)
        //so as the current page state changes the last and first index changes as well and for item that changes from 1 to 2 so the setcurrentpage displays the first and last index of the correpsonding pages
    }

    function prev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        else {
            setCurrentPage(Math.ceil(Post.length / postsPerPage))
        }
    }

    function next() {
        if (currentPage < Math.ceil(Post.length / postsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
        else {
            setCurrentPage(1)
        }
    }


    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }



    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: 'black' }} >
                <div style={{ backgroundColor: "#ffffff", width: '45%', border: '1px solid black', borderRadius: '10px', padding: '50px 0px' }}>
                    <h1 style={{ textAlign: 'center', }}>PAGINATION</h1>
                    <ul style={{ marginTop: '50px', marginLeft: "40px" }}>
                        {currentposts.map((item) => {
                            console.log(item);
                            return (
                                <div>
                                    <li>{item.id} {item.title}</li>
                                </div>
                            )
                        })}
                    </ul>
                    <div style={{ margin: 'auto', width: '350px', display: "flex", justifyContent: "space-between", marginTop: '50px' }}>
                        {pagenumbers.map((item) => {
                            console.log(pagenumbers);
                            return (
                                <button onClick={() => pgi(item)} style={{ cursor: "pointer", width: "30px", height: '30px', borderRadius: "5px", border: 'none' }}>
                                    {item}
                                </button>
                            )
                        })}
                    </div>
                    <div style={{ width: "150px", height:"50px", margin:"auto", marginTop : "30px", display:'flex', justifyContent: "space-between"   }} >
                        <button style={{ width: "60px", height: "30px"  , border:"none", cursor:'pointer' }}  onClick={prev}>
                            previous
                        </button>
                        <button  style={{ width: "60px", height: "30px", border:"none", cursor:'pointer'   }}  onClick={next}>
                            Next
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Pagina



// import React, { useState, useEffect } from 'react';
// import Loading from "./Loading";

// function Pagina() {
//     const [loading, setLoading] = useState(false);
//     const [posts, setPosts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 10;

//     useEffect(() => {
//         setLoading(true);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(data => {
//                 setPosts(data);
//                 setTimeout(() => setLoading(false), 2000);
//             });
//     }, []);

//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//     const handlePageClick = pageNumber => setCurrentPage(pageNumber);

//     const handlePrevClick = () => setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : Math.ceil(posts.length / postsPerPage)));

//     const handleNextClick = () => setCurrentPage(prevPage => (prevPage < Math.ceil(posts.length / postsPerPage) ? prevPage + 1 : 1));

//     if (loading) return <main><Loading /></main>;

//     return (
//         <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
//             <div style={{ backgroundColor: '#ffffff', width: '45%', border: '1px solid black', borderRadius: '10px', padding: '50px 0px' }}>
//                 <h1 style={{ textAlign: 'center' }}>PAGINATION</h1>
//                 <ul style={{ marginTop: '50px', marginLeft: '40px' }}>
//                     {currentPosts.map(post => (
//                         <div key={post.id}>
//                             <li>{post.id} {post.title}</li>
//                         </div>
//                     ))}
//                 </ul>
//                 <div style={{ margin: 'auto', width: '350px', display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
//                     {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
//                         <button key={i + 1} onClick={() => handlePageClick(i + 1)} style={{ cursor: 'pointer', width: '30px', height: '30px', borderRadius: '5px', border: 'none' }}>
//                             {i + 1}
//                         </button>
//                     ))}
//                 </div>
//                 <div style={{ width: '150px', height: '50px', margin: 'auto', marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
//                     <button style={{ width: '60px', height: '30px', border: 'none', cursor: 'pointer' }} onClick={handlePrevClick}>
//                         Previous
//                     </button>
//                     <button style={{ width: '60px', height: '30px', border: 'none', cursor: 'pointer' }} onClick={handleNextClick}>
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pagina;
