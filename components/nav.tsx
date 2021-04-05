import styled from "styled-components"
import Link from "next/link"
import { FaHome } from 'react-icons/fa';
import { BsClipboardData, BsBoxArrowInLeft, BsBoxArrowInRight } from 'react-icons/bs';
import { IoLogoGameControllerB } from "react-icons/io"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from 'next/router'

const Nav = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();

    const signOut = () => {
        auth.signOut()
    }

    return <Wrapper>
        <Spacer>
            <Link href="/">
                <Button>
                    <FaHome />
                    Home
                </Button>
            </Link>
            <Link href="/leaderboard">
                <Button>
                    <BsClipboardData />
                    Leaderboard
                </Button>
            </Link>
        </Spacer>

        <Spacer>
            <Link href="/Games">
                <Button>
                    <IoLogoGameControllerB />
                    Games
                </Button>
            </Link>
            {user ?
                <>
                    <Button onClick={signOut}>
                        <BsBoxArrowInLeft />
                        Log Out
                    </Button>
                    <Link href={`/user/${user.providerData[0]?.uid}`}>
                        <Button>
                            {user.providerData[0]?.displayName}
                        </Button>
                    </Link>
                </>
                : router.pathname !== "/log-in" ?
                    <Link href="/log-in">
                        <Button>
                            <BsBoxArrowInRight />
                        Log-In
                        </Button>
                    </Link>
                    : undefined
            }
        </Spacer>
    </Wrapper>
}

export default Nav

export const NavHeight: string = "80px";

const Wrapper = styled.div`
    width: 100%;
    height: ${NavHeight};
    background-color: #666666;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    user-select:none;
    padding: 10px 15px;
    font-size: 25px;
    color: #000000;
    background: none;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 0 10px;
    border:0;
    border-radius: 10px;
    svg {
        margin: 0 5px 0 0;
    }
    :hover {
        background-color: #7a7a7a;
        svg {
            color: #fff;
        }
    }
    :focus {
        outline: none;
    }
    :active {
        background-color: #616161;
    }
`
const Spacer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 0 20px;
`