import { Button, Form, Input } from 'antd'

import React, { useState } from 'react'
import { LoginUser } from '../../api/Api';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const onFinish = (data) => {
        console.log(data)
        LoginUser(data)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
                localStorage.setItem('user', JSON.stringify(res?.data))
                localStorage.setItem('user-token', JSON.stringify(res?.data?.token))
                navigate("/")
            }).catch(error => {
                console.log(error)
            })
    }

    console.log(user)
    return (
        <div className='w-96 my-24 mx-auto'>
            <h2 className='text-3xl my-4 text-center text-black font-bold'>SignIn</h2>
            <Form onFinish={onFinish}>
                {/* user name */}
                <div>
                    <Form.Item
                        label="user name"
                        className="form-group"
                        name="username"
                        rules={[
                            { required: true, message: "Please Enter Your Username!" },
                        ]}
                    >
                        <Input
                            className='h-[40px]'
                            placeholder="username"
                        // suffix={<UserOutlined className="iconDesing" />}
                        />
                    </Form.Item>
                </div>

                {/* password */}
                <div >
                    <Form.Item
                        label="password"
                        className="form-group"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter Your password!",
                            },
                            {
                                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$/,
                                message:
                                    "Password must be 6-12 characters long, Contain at least one upper case, lower case and not contain white spaces",
                            },
                        ]}
                    >
                        <Input.Password
                            className='h-[40px]'
                            placeholder="input password"
                            visibilityToggle={{
                                visible: passwordVisible,
                                onVisibleChange: setPasswordVisible,
                            }}
                        />
                    </Form.Item>
                </div>
                <div className="col-sm-12">
                    <Form.Item className="form-group">
                        <Button
                            className="bg-[#403362] text-white rounded-xl font-bold"
                            type="primary"
                            htmlType="submit"
                        // onClick={handleClick}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default Login