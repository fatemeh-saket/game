import style from '../../style/RulePage.module.css'
import correct from '../../assets/correct-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'


function RulePage() {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <h2> توضیح بازی </h2>
                <div className={style.description} >
                    <h5> مقصود بازی </h5>
                    <p>
                        باید بتوانید چهار مهره ی یک رنگ را کنار هم، قرار بدهید. میتوانید این کار را به صورت افقی یا عمودی و یا حتی مورب انجام دهید. طرف مقابل شما هم سعی میکند که مانع از انجام این کار شود و بتواند چهار مهره ی خودش را کنار هم قرار دهد
                    </p>
                </div>
                <div className={style.rules}>
                    <h5> نحوه ی بازی </h5>
                    <ul>
                        <li> 1 - بازی در چند راند برگزار میشود و در اخر کسی که بیشترین امتیاز را کسب کند برنده میشود. </li>
                        <li> 2 - در راند اول بازی، بازیکن1(قرمز) شروع کننده است ولی در راند های بعد شروع کننده ی بازی تغییر میکند </li>
                        <li> 3 - هر بازیکن در نوبت خود فقط 30 ثانیه فرصت دارد تا مهره ی خودش را جایگزاری کند. در غیر این صورت نوبتش سوخت میشود </li>
                    </ul>
                </div>
                <div className={style.agreement}>
                    <NavLink to='/'>
                        <img src={correct} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default RulePage