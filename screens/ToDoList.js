import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView,FlatList} from 'react-native';
import { Button, Icon, ListItem} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';
import { styles } from '../utils/styles';
import {deleteTodo} from '../redux/actions/todoActions';


function ToDoList(props)  {
    const navigation = useNavigation();
    const {todoState} = props;
    const {deleteTodoDispatch} = props;

    const Item = ({ title, id}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Icon
                style={styles.iconList}
                name='delete'
                size={25}
                onPress={() => {                
                    deleteTodoDispatch(id)
                }}
            /> 

        </View>
      );    

    const renderItem = ({ item }) => (
    <Item title={item.name} id={item.key} />
    );
    return(
        <View style = {styles.container}>

            <Text style={{marginTop: 60, fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}> To Do List </Text>
            <Button
                style = {{marginTop: 20, alignSelf: 'center'}}
                title='Add To Do element'
                type='clear'
                onPress ={ () => navigation.navigate('ToDoForm') }
            />
            <FlatList style = {styles.listContainer}
                data= {todoState}
                keyExtractor={item => item.key.toString()}
                renderItem={ renderItem}
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
        deleteTodoDispatch: (key) => {
            dispatch(deleteTodo(key));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)