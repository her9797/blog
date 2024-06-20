import React from 'react';

const Aside = () => {
    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <h1 id="colorlib-logo"><a href="index.html"><span className="img" style={{backgroundImage: 'url(images/author.jpg)'}}></span>심민섭</a></h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li className="colorlib-active"><a href="/">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">경험</a></li>
                    <li><a href="#">My Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            
        </aside>
    );
};

export default Aside;
