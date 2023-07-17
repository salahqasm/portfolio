import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item"  >
                      <a href={item.url} target='_blank' rel="noopener noreferrer">
                        <div className="boxSH item-wrap " style={{  borderRadius: "15px"}} >
                          <img src={`${item.imgurl}`} className="item-img" alt='Project logo' />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div >
      </section >
    );
  }
}
