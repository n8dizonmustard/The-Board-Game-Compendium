import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function LoginPage(props){
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
                
        try {
            await userService.login(state);
            // Route to wherever you want!
            props.handleSignUpOrLogin()
            history.push('/boardgames')
            
        } catch (err) {
            // Invalid user data (probably duplicate email)
            setError(err.message)
        }
    }

    const style = {
      color: 'white'
    };

    const purple = {
      color: '#751aff'
    };

    const purpleBtn = {
      backgroundColor: '#751aff',
      color: 'white'
    }

    // user ? console.log('logged in!', user) : console.log('not logged in')

    return (
        <>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' backgroundColor='#6600ff' >
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={style} textAlign='center'>
            <Image src='https://storage.gra.cloud.ovh.net/v1/AUTH_011f6e315d3744d498d93f6fa0d9b5ee/tabletop/media_attachments/files/000/772/199/original/24e7117847c40728.png' /> Log-in to your account
            </Header>
            <Form  autoComplete="off"  onSubmit={handleSubmit}>
               <Segment stacked>
                  <Form.Input
                    type="email"
                   
                    name="email"
                    placeholder="Email"
                    value={ state.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={ state.password}
                    onChange={handleChange}
                    required
                  />
                <Button
                  style={purpleBtn}
                  fluid size='large'
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/signup' style={purple}>Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>
        </>
      );
}

