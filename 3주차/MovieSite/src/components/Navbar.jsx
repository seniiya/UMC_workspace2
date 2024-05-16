// import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-wrap">
                <div className="nav-left-wrap">
                    <ul>
                        <li>
                            <Link className='header-left-item' to='/' >
                            <p className="ho" >UMC Movie</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='sign'>
                            <p className="ho" >로그인</p>
                            </Link>
                        </li>
                        <li><Link className='header-nav-item'>
                                <p className="ho" >회원가입</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/popular'>
                                <p className="ho" >Popular</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='nowplay'>
                                <p className="ho">Now Playing</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='top'>
                            <p className="ho">Top Rated</p>
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='upcoming'>
                                <p className="ho">Upcoming</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}