/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Colossus.AI Auth API',
        version: '1.0.0',
        description: 'Authentication API documentation'
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Development server'
        }
      ],
      paths: {
        '/auth/signup': {
          post: {
            summary: 'Register new user',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      username: { type: 'string' },
                      email: { type: 'string' },
                      password: { type: 'string' },
                      confirmPassword: { type: 'string' }
                    },
                    required: ['username', 'email', 'password', 'confirmPassword']
                  }
                }
              }
            },
            responses: {
              201: { description: 'User created successfully' },
              400: { description: 'Validation error or user already exists' },
              500: { description: 'Server error' }
            }
          }
        },
        // '/auth/login': {
        //   post: {
        //     summary: 'User login',
        //     requestBody: {
        //       required: true,
        //       content: {
        //         'application/json': {
        //           schema: {
        //             type: 'object',
        //             properties: {
        //               emailOrUsername: { type: 'string' },
        //               password: { type: 'string' }
        //             },
        //             required: ['emailOrUsername', 'password']
        //           }
        //         }
        //       }
        //     },
        //     responses: {
        //       200: { description: 'Login successful' },
        //       401: { description: 'Invalid credentials' },
        //       500: { description: 'Server error' }
        //     }
        //   }
        // },
        // '/auth/reset-password': {
        //   post: {
        //     summary: 'Request password reset',
        //     requestBody: {
        //       required: true,
        //       content: {
        //         'application/json': {
        //           schema: {
        //             type: 'object',
        //             properties: {
        //               email: { type: 'string' }
        //             },
        //             required: ['email']
        //           }
        //         }
        //       }
        //     },
        //     responses: {
        //       200: { description: 'Reset pin sent' },
        //       404: { description: 'User not found' },
        //       500: { description: 'Server error' }
        //     }
        //   }
        // },
        // '/auth/verify-pin': {
        //   post: {
        //     summary: 'Verify reset pin and update password',
        //     requestBody: {
        //       required: true,
        //       content: {
        //         'application/json': {
        //           schema: {
        //             type: 'object',
        //             properties: {
        //               email: { type: 'string' },
        //               pin: { type: 'string' },
        //               newPassword: { type: 'string' },
        //               confirmPassword: { type: 'string' }
        //             },
        //             required: ['email', 'pin', 'newPassword', 'confirmPassword']
        //           }
        //         }
        //       }
        //     },
        //     responses: {
        //       200: { description: 'Password updated successfully' },
        //       400: { description: 'Invalid or expired pin' },
        //       500: { description: 'Server error' }
        //     }
        //   }
        // },
        // '/auth/google': {
        //   post: {
        //     summary: 'Authenticate with Google',
        //     requestBody: {
        //       required: true,
        //       content: {
        //         'application/json': {
        //           schema: {
        //             type: 'object',
        //             properties: {
        //               code: { type: 'string' }
        //             },
        //             required: ['code']
        //           }
        //         }
        //       }
        //     },
        //     responses: {
        //       200: { description: 'Google authentication successful' },
        //       400: { description: 'Invalid Google token' },
        //       500: { description: 'Server error' }
        //     }
        //   }
        // }
      }
    }
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
