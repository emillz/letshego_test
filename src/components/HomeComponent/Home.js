/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {

    // console.log(props.home);

    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    </div>
                </div>
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">NY Times Most Popular</h3>
                                    <div className="card-tools">
                                        <button style={{ color: 'white' }} type="button" className="btn btn-tool" title="Search">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button style={{ color: 'white' }} type="button" className="btn btn-tool" title="Search">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {
                                        props.home.isLoading === "true" ?
                                            <div align="center">
                                                <span><img src="static/assets/dist/img/loader.gif" alt="loader" /><br /><p>We are loading the news. Please wait...</p></span>
                                            </div>
                                            :
                                            <div className="tab-content">
                                                {
                                                    props.home.news ?
                                                        // eslint-disable-next-line array-callback-return
                                                        props.home.news.map((data) => {
                                                            return (
                                                                <div className="post" key={data.id}>
                                                                    <div className="user-block">
                                                                        <img className="img-circle img-bordered-sm" src={data.media[0] ? data.media[0]["media-metadata"][0].url : "assets/dist/img/user1-128x128.jpg"} alt="user image" />
                                                                        <span className="username">
                                                                            <Link to="#" data-toggle="modal" data-target="#show_news_detail" onClick={() => props.set_modal_contents(data)}>{data.title}</Link>
                                                                            <Link to="#" className="float-right btn-tool"><i className="fas fa-chevron-right"></i></Link>
                                                                        </span>
                                                                        <span className="description">{data.byline}</span>
                                                                    </div>

                                                                    <p>
                                                                        <Link to="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1"></i> Share</Link>
                                                                        <Link to="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1"></i> Like</Link>
                                                                        <span className="float-right">
                                                                            <Link to="#" className="link-black text-sm">
                                                                                <i className="far fa-calendar"></i> {data.published_date}
                                                                            </Link>
                                                                        </span>
                                                                    </p>

                                                                    {/* <input className="form-control form-control-sm" type="text" placeholder="Type a comment" /> */}
                                                                </div>
                                                            )
                                                        })
                                                        : null
                                                }
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {props.selected_news.title ?
                    <div className="modal fade" id="show_news_detail">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">{props.selected_news.title}</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src={props.selected_news.media[0] ? props.selected_news.media[0]["media-metadata"][0].url : "assets/dist/img/user1-128x128.jpg"} alt="user image" width="100%" height={250} />
                                    <br /><br />
                                    <p>{props.selected_news.abstract}</p>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal" id="dismiss_show_news_detail_modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
            </section>
        </>
    )
}

export default Home