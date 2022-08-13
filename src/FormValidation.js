import React, { useEffect, useState } from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    fullName : yup.string().required('FullName is required').min(5,'FullName must be at least 5').max(15,'FullName is must be less than or equal 15'),
    userName : yup.string().required('UserName is required').min(5,'FullName must be at least 5').max(15,'FullName is must be less than or equal 15'),
    slug : yup.string().required('Slug is required').min(5,'Slug must be at least 5').max(10,'Slug is must be less than or equal 10'),
    url : yup.string().required('Url is required').url('Url must be valid'),
    email : yup.string().required('Email is required').email('Email must be valid'),
    mobileNumber : yup.number().required('MobileNumber is required').positive('mobile number must be positive number').integer('mobile number must be integer number'),
    password : yup.string().required('Password is required').matches().min(8,'Password must be 8').max(15,'Password must be less than or equal 15'),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Password must be matched').required('confirmPassword is required')
})

export default function FormValidation() {
    const { register,reset, handleSubmit,setValue, watch, formState: { errors,isSubmitSuccessful,isSubmitting } } = useForm({
        resolver: yupResolver(schema)
      });
    //   useEffect(() => {
    //     reset({
    //         fullName: '',
    //         userName: '',
    //         slug: '',
    //         url: '',
    //         email: '',
    //         mobileNumber: '',
    //         password: '',
    //         confirmPassword: '',
    //     })
    //   }, [isSubmitSuccessful])

    const [submitted,setSubmitted] = useState(false)
    const [loading,setLoading] = useState(false)
    const onSubmit = data => {
        setTimeout(() => {
            setSubmitted(true)
        },1000)
        setLoading(true)
    };


  return (
    <>
        <div className='form-size'>
            {submitted ? <h2 className='form-submit'>Successfully Submitted</h2> 
            : 
            
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row} className="mb-3" controlId="formBasicFullName">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>Full Name</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="text" 
                            isInvalid={errors?.fullName}
                            {...register("fullName")}
                            placeholder="Enter Your Full Name" 
                        />
                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.fullName?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicUserName">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>User Name</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="text" 
                            isInvalid={errors?.userName}
                            {...register("userName")}
                            placeholder="Enter Your User Name" 
                        />
                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.userName?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicSlug">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>Slug</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="text" 
                            isInvalid={errors?.slug}
                            {...register("slug")} 
                            placeholder="Enter Valid Slug" 
                        />
                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.slug?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicUrl">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>Valid Url</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="text" 
                            isInvalid={errors?.url}
                            {...register('url')}
                            placeholder="Enter Valid Url" 
                        />
                         <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.url?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicMobileNumber">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>Mobile Number</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="text" 
                            isInvalid={errors?.mobileNumber}
                            {...register('mobileNumber')}
                            placeholder="Enter Your Mobile Number" 
                        />
                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.mobileNumber?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Col sm={3}>
                       <Form.Label column={true} className='form-title'>Email address</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control  
                            type="email" 
                            isInvalid={errors?.email}
                            {...register('email')}
                            placeholder="Enter Your Email Address" 
                        />
                        <Form.Text className="text-dark">
                           We'll never share your email with anyone else.
                        </Form.Text>

                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.email?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Col sm={3}>
                       <Form.Label className='form-title' column={true}>Password</Form.Label>
                    </Col>

                    <Col sm={9}>
                        <Form.Control 
                            type="password" 
                            isInvalid={errors?.password}
                            {...register('password')}
                            placeholder="Enter Password" 
                        />
                         <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.password?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicConfirmPassword">
                    <Col sm={3}>
                       <Form.Label className='form-title' column={true}>Confirm Password</Form.Label>
                    </Col>

                    <Col sm={9}>
                        <Form.Control 
                            type="password" 
                            {...register('confirmPassword')}
                            isInvalid={errors?.confirmPassword}
                            placeholder="Enter Confirm Password" 
                        />
                        <Form.Control.Feedback type="invalid" className='d-block'>
                           <span className='error-text'>{errors?.confirmPassword?.message}</span>
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                     <Col sm={3}>
                       
                    </Col>

                    <Col sm={9}>
                       <Form.Check 
                            type="checkbox" 
                            label="Check me out" 
                       />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicButton">
                     <Col sm={3}>
                       
                    </Col>

                    <Col sm={9}>
                        <div className="d-grid gap-2">
                            {
                                loading ? <Button variant="dark" type="submit" disabled>
                                              Loading ....
                                          </Button>
                                          :
                                          <Button variant="dark" type="submit">
                                              Submit
                                          </Button>
                            }
                            
                        </div>
                    </Col>
                </Form.Group>
                
            </Form>
             }
        </div>
    </>
  )
}
