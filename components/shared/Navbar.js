import { useState, useEffect } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

import withApollo from '@/hoc/withApollo';
import { useLazyGetUser } from '@/apollo/actions';

const AppLink = ({ children, className, href }) =>
    <Link href={href}>
        <a className={className}>{children}</a>
    </Link>

const AppNavbar = () => {

    const [ user, setUser ] = useState(null);
    const [ hasResponse, setHasResponse ] = useState(false);
    const [ getUser, { data, error }] = useLazyGetUser();

    useEffect(() => {
        getUser();
    }, []);

    if(data) {
        if(data.user && !user) { setUser(data.user); }
        if(!data.user && user) { setUser(null); }
        if(!hasResponse) { setHasResponse(true); }
    }

    return (
        <>
            {/* NAVBAR START */}
            <div className="navbar-wrapper">
                <Navbar expand="lg" className="navbar-dark fj-mw9">
                    <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">Luis Rodriguez</AppLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <AppLink href="/portfolios" className="nav-link mr-3">Portfolio</AppLink>
                            <AppLink href="/forum/categories" className="nav-link mr-3">Forum</AppLink>
                            <AppLink href="/cv" className="nav-link mr-3">Cv</AppLink>
                        </Nav>
                        { hasResponse && 
                            <Nav>
                                { 
                                    user && 
                                    <>
                                       <span className="nav-link mr-2  font-weight-bold"> Welcome {user.username}</span>
                                       <NavDropdown className="mr-2" title="Manage">
                                            {
                                                (user.role === 'admin' || user.role === 'developer') &&
                                                <AppLink href="/portfolios/new" className="dropdown-item">
                                                    Create Portfolio
                                                </AppLink>
                                            }
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                       <AppLink href="/logout" className="nav-link btn btn-danger">
                                            Sign Out
                                        </AppLink>
                                    </>
                                }
                                { 
                                    (error || !user) &&
                                    <>
                                        <AppLink href="/login" className="nav-link mr-3">
                                            Sign In
                                        </AppLink>
                                        <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">
                                            Sign Up
                                        </AppLink>
                                    </>
                                }
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div >
            {/* NAVBAR ENDS */}
        </>
    );
};

export default withApollo(AppNavbar);