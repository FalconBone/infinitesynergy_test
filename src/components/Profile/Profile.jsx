import { useLocation, useParams } from 'react-router-dom'
import classes from './Profile.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserData } from '../../redux/profileSlice'

const Profile = () => {

    const {userId} = useParams()

    const dispatch = useDispatch()
    const user = useSelector(state => state.profile.users[userId])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const [isChange, setIsChange] = useState(false)

    const onClickSave = () => {
        dispatch(changeUserData({id: userId, data: {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email
        }}))
    }

    useEffect(() => {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setAge(user.age)
        setEmail(user.email)
    }, [userId])

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Профиль
            </div>
            <div className={classes.info_block}>
                <div className={classes.info_text}>
                    Имя
                </div>
                <input value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>

            <div className={classes.info_block}>
                <div className={classes.info_text}>
                    Фамилия
                </div>
                <input value={lastName}  onChange={(e) => {setLastName(e.target.value)}}/>
            </div>

            <div className={classes.info_block}>
                <div className={classes.info_text}>
                    Возраст
                </div>
                <input type='number' value={age}  onChange={(e) => {setAge(e.target.value)}}/>
            </div>

            <div className={classes.info_block}>
                <div className={classes.info_text}>
                    Почта
                </div>
                <input type='email' value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <button className={classes.save_button} onClick={onClickSave}>Сохранить</button>
        </div>
    )
}

export default Profile