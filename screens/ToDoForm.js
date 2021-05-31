import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { addTodo} from '../redux/actions/todoActions';
import {connect} from 'react-redux';
import { styles } from '../utils/styles';


const TodoSchema = yup.object({
    name: yup.string()
        .required(),
})


function ToDoForm(props) {

    const navigation = useNavigation();

    const {addTodoDispatch} = props;

    return(
        <View style={styles.container}>
            <Text style={{marginTop: 80, fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}> Add a Task to To Do List </Text>
            <View style={ {marginTop: 60 } }>
                
                <Formik
                    initialValues={{name: ''}}
                    validationSchema={TodoSchema}
                    
                    onSubmit={( data, actions) => {
                        addTodoDispatch(data.name);
                        actions.setSubmitting(false);
                        actions.resetForm();

                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                style={styles.textinput}
                                placeholder='ToDo'
                                onChangeText = {props.handleChange('name')}
                                value={props.values.name}
                            />
                            <Text style={styles.errortext}> {props.errors.name}</Text>   

                            <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} 
                                    title= 'Add to To Do List' 
                                    disabled={props.isSubmitting} 
                                    onPress={props.handleSubmit}  
                            />

                        </View>
                    
                    )}
            
                </Formik>
            </View>

            <Button
                style = {{marginTop: 20, alignSelf: 'center'}}
                title='See To Do List'
                type='clear'
                onPress ={ () => navigation.navigate('ToDoList') }
            />
            
        </View>
    )
}


const mapStateToProps = (state) => {
    return{
      todoState: state.todoReducer.todoList,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return{
        addTodoDispatch: (data) => {
            dispatch(addTodo(data));
        },
    }
}
  
 export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)