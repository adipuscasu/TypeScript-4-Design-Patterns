interface SignupFormState {
    email: string;
    name: string;
}

interface ActionPayload {
    key: keyof SignupFormState;
    valu: string;
}

// const update1: ActionPayload = {
//     key: 'email'
// }

// type actipPayloadKeys = keyof typeof update1;

