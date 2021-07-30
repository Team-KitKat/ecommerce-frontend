import React, {useState} from 'react';
import {Col, Nav, Row} from "react-bootstrap";
import {
    AlertTriangle,
    CheckSquare,
    Edit,
    Menu,
    PlusCircle,
    ShoppingBag,
    ShoppingCart,
    Trello,
} from "react-feather"
import SideNavBarTitle from "./NavBarTitle";
import ProfileDetails from "../profileDetails/ProfileDetails";
import {INavItem} from "../../../types/MainTypes";
import {Link} from "react-router-dom";

const navItems: INavItem [] = [
    {
        title: 'Home',
        route: 'admin/dashboard',
        icon : 'trello',
        subNav: [
            {
                icon : 'trello',
                title: 'Dashboard',
                route: 'admin/dashboard',
                subNav: null
            }
        ]
    },
    {
        title: 'Product',
        route: 'admin/view-product',
        icon : 'shopping-bag',
        subNav: [
            {
                icon : 'plus-circle',
                title: 'Add Product',
                route: 'admin/add-product',
                subNav: null
            },
            {
                icon : 'menu',
                title: 'View Product',
                route: 'admin/view-Product',
                subNav: null
            },
            {
                icon : 'edit',
                title: 'Update Product',
                route: 'admin/update-Product',
                subNav: null
            },
            {
                icon : 'alert-triangle',
                title: 'OutOfStock',
                route: 'admin/out-of-stock-Product',
                subNav: null
            }
        ]
    },

    {
        title: 'Orders',
        route: 'admin/view-order',
        icon : 'shopping-cart',
        subNav: [
            {
                icon : 'menu',
                title: 'View Order',
                route: 'admin/view-order',
                subNav: null
            },
            {
                icon : 'edit',
                title: '    Order Status',
                route: 'admin/update-Product',
                subNav: null
            },
            {
                icon : 'check-square',
                title: 'Report',
                route: 'admin/out-of-stock-Product',
                subNav: null
            }
        ]
    },


]
const SideNavBar: React.FC = () => {
    const [ShowSideBar, setShowSideBar] = useState<boolean | null>(false);
    const handleOnReturnIcon = (icon:string) => {
        switch (icon) {
            case 'trello':
                return <Trello />;
            case 'edit':
                return <Edit size={17}/>
            case 'menu':
                return <Menu size={17} />
            case 'check-square':
                return <CheckSquare size={17} />
            case 'shopping-cart':
                return <ShoppingCart/>
            case 'alert-triangle':
                return <AlertTriangle size={17} />
            case 'plus-circle':
                return <PlusCircle size={17}/>
            case 'shopping-bag':
                return <ShoppingBag/>
            default:
                return <ShoppingCart/>
        }
    }

    return (
        <React.Fragment>

            <Col xs={12} sm={12} md={12} lg={3} xl={3} className="side-navbar">
                <Row onClick={ () => {setShowSideBar(!ShowSideBar)} }>
                    <Col xs={12} >
                        <ProfileDetails />
                        <div>
                            <SideNavBarTitle/>
                            <Nav defaultActiveKey="/admin" className="flex-column">

                                {navItems.map( (navitem:INavItem) => {
                                    return ( 
                                        <Nav.Item key={navitem.title}>
                                            <div className="nav-link" >
                                                {handleOnReturnIcon(navitem.icon)}
                                                &nbsp;
                                                &nbsp;
                                                {navitem.title}
                                                {
                                                    navitem.subNav &&
                                                    navitem.subNav.map( (subNav: INavItem) => {
                                                        return (
                                                            <Link to={`/${subNav.route}`} key={subNav.route}>
                                                                <div className="nav-link"  >
                                                                    &nbsp;
                                                                    &nbsp;
                                                                    {handleOnReturnIcon(subNav.icon)}
                                                                    &nbsp;
                                                                    &nbsp;
                                                                    {subNav.title}
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Nav.Item>
                                    )
                                })}
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

export default SideNavBar;