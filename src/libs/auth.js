import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = (req, res) => {

    return {
        providers: [
            CredentialProvider({
                name: 'User',
                credentials: {
                    firstname: {label: "Firstname", type: "string", placeholder: "Enter firstname"},
                    lastname: {label: "Lastname", type: "string", placeholder: "Enter lastname"},
                    email: {label: "Email", type: "email", placeholder: "Enter email"},
                    memberID: {label: "Member ID", type: "string", placeholder: "Enter member ID"},
                    cvt: {label: "CVT", type: "string", placeholder: "Enter CVT"}
                },
                async authorize(credentials) {
                    try {
                        if(cvt){
                            const response =  await fetch(`/api/travels`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(cvt)
                              });
                              console.log("FROM CVT: ",response);
                              return response;
                              
                        }else{
                            const data = {
                                access_token: process.env.NEXT_ACCESS_TOKEN,
                                import: {
                                    members: [
                                        {
                                            organization_customer_identifier: process.env.NEXT_ORG_IDENTIFIER,
                                            program_customer_identifier: process.env.NEXT_PER_IDENTIFIER,
                                            first_name: credentials.firstname,
                                            last_name: credentials.lastname,
                                            email_address: credentials.email,
                                            member_customer_identifier: credentials.memberID,
                                            member_status: 'OPEN'
                                        }
                                    ]
                                }
                            };
                            const response = await fetch(process.env.NEXT_ACCESS_URL, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Token': data.access_token
                                }
                            });
                            if (!response.ok) {
                              const responseImpt = await fetch(`https://amt-stage.accessdevelopment.com/api/v1/imports`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                              });
                              const responseImptData = await responseImpt.json();
                              console.log('imported:', responseImptData);
                              return responseImptData?.data[0];
                            }
                            else{
                              const responseData = await response.json();
                              console.log('get imported details:', responseData);
                              return responseData?.data[0];
                            }
                        }
                    } catch (error) {
                        console.log("Error: ", error)
                        throw new Error(error)
                    }
                }
            })
        ],
        callbacks: {
            signIn({ account, user, profile}) {
                return true
            },
            async redirect({ url, baseUrl }) {
                console.log('url-', url)
                // Allows relative callback URLs
                if (url.startsWith("/")) return `${baseUrl}${url}`
                // Allows callback URLs on the same origin
                else if (new URL(url).origin === baseUrl) return url
                return baseUrl
            },
            async session({ session, token }) {
                session.user.first_name = token.image;
                session.user.userId = token.userId;
                session.user.email = token.email;
                session.user.company_name = token.company_name;
                return session;
            }
        }
    }
}