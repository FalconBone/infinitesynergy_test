import {List} from 'react-virtualized';
import AutoSizer from "react-virtualized-auto-sizer";
import classes from './Nav.module.css'
import 'react-virtualized/styles.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Nav = () => {

    const users = useSelector(state => state.profile.users)


    function rowRenderer({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible, // This row is visible within the List (eg it is not an overscanned row)
        style, // Style object to be applied to row (to position it)
      }) {
        return (
            <NavLink to={`/${index}`} className={`${classes.row}`} key={key} style={({ isActive }) => ({
              color: isActive ? '#fff' : '#171717',
              background: isActive ? '#7600dc' : 'none',
              ...style
            })}>
                <div className={classes.row_text}>
                    {`${users[index].firstName} ${users[index].lastName}`}
                </div>
            </NavLink>
        );
      }

    //


    return (
        <nav className={classes.container}>
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        className={classes.list}
                        width={width}
                        height={height}
                        rowCount={users.length}
                        rowHeight={35}
                        rowRenderer={rowRenderer}
                    />
                )}
            </AutoSizer>

        </nav>
    )
}

export default Nav