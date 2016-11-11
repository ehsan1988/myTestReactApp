var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav= (props) => {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Application</li>
                        <li>
                            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/example" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Example</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
module.exports=Nav;

