/*
Polymorphimsm is a concept that allows objects to behave differently depending on the context, this having many forms.
We can achieve polymorphism with TypeScript using method overloading.
*/

class Component {
    onInit(): void {
        console.log("Called from Component");
    }
}

class ReactComponent extends Component {
    onInit(): void {
        console.log("Called from React Component");
    }
}

const c = new ReactComponent();
c.onInit(); // logs "Called from Reach Component"