import React from 'react';
import { Github } from "react-bootstrap-icons";


export default function Project(props) {
    const projectStyle = {
        backgroundColor: '#22333b',
        color: '#c2fcf7',
    }

    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website}><h2 className="card-title">{props.title}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description} <a href={props.repository} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image2} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website2}><h2 className="card-title">{props.title2}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description2} <a href={props.repository2} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image3} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website3}><h2 className="card-title">{props.title3}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description3} <a href={props.repository3} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image4} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website4}><h2 className="card-title">{props.title4}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description4} <a href={props.repository4} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image5} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website5}><h2 className="card-title">{props.title5}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description5} <a href={props.repository5} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-4" >
                        <img src={props.image6} className="card-img-top" alt='' />
                        <div className="card-body" style={projectStyle}>
                           <a style={{color: '#c2fcf7', textDecoration: 'none'}} href={props.website6}><h2 className="card-title">{props.title6}  </h2></a>
                            <p className="card-text" style={{ fontSize: '21px'}}>{props.description6} <a href={props.repository6} style={{ padding: '5px',color: '#FFBEAD', fontSize: '35px'}}><Github/></a></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
