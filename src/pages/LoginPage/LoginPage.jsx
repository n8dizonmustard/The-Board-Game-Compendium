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

    const maroon = {
      color: 'maroon'
    };

    const ButtonColor = {
      backgroundColor: 'maroon',
      color: 'white'
    }

    // user ? console.log('logged in!', user) : console.log('not logged in')

    return (
        <>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' backgroundColor='#6600ff' >
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={style} textAlign='center'>
            <div className='login-header'>
              <Image avatar src='https://i.pinimg.com/originals/69/44/f8/6944f8b93dc32ec7e894a04051b7d2f1.png' className='icon' />
              <div className='login-title-text'>Log-in to your account</div>
            </div>
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
                  style={ButtonColor}
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
              New to us? <Link to='/signup' style={maroon}>Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>
        </>
      );
}

