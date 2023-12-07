import OAuth2Login from 'react-simple-oauth2-login';

import {BsGithub} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import {userLogin} from '../redux/services/authService';

const OAuthButton = () => {
    // const { loading, userInfo, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onSuccess = ({code}) => {
        console.log(code)
        dispatch(userLogin({code}));
    };

    return (
        <OAuth2Login
            className={'mt-6 w-full'}
            authorizationUrl="https://github.com/login/oauth/authorize"
            scope={'read:user user:email'}
            responseType="code"
            clientId="db7f47727df511d0f54a"
            redirectUri={'http://192.168.0.16:5173'}
            onSuccess={onSuccess}
            onFailure={() => {
            }}>
            <div
                className="inline-flex justify-center rounded-md w-full border border-transparent bg-[#393939] hover:bg-[#3e3e3e] py-2 text-sm font-medium text-white focus:outline-none">
                <BsGithub size={20} className="mr-3"/>
                <p>Sign in with GitHub</p>
            </div>
        </OAuth2Login>
    );
}

export default OAuthButton;
