import React , {useState} from 'react';
import { Container, Form, FormControl , Button} from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './SearchField.css';
const cx = classNames.bind(styles);

export const SearchField = (props) => {
    const [value, setValue] = useState('');
    const onChange = (event) => setValue(event.target.value);
    const handleClick = () => props.onClick(value);

    return (<Container className={cx('searchField')}>
        <Form inline>
            <FormControl value={value} type="text" placeholder="Enter Twitter #tag" className="mr-md-2" onChange={onChange} />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
        </Form>
    </Container>);
    
}

export default SearchField;
