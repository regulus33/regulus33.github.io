import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby';


// grids-template-rows: auto auto;

const Work = () => (
    <Layout>
        <div id="work" stlye={{marginTop: 40}}>
            <div style={{}}>
                <div style={
                    {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        color: "black",
                        textDecoration: 'underline',
                        fontSize: "24px",
                        marginTop: "15%"
                    }
                }>

                    <Link to="/tech">Software</Link>
                    <Link to="/paintings">Paintings</Link>
                    <Link to="/sound">Music</Link>

                </div>
            </div>
        </div>
    </Layout>
)

export default Work
