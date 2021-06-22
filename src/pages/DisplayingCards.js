import React from 'react';

import ComponentDisplayingCards from '../ui/components/DisplayingCards/ComponentDisplayingCards';
import optionForDisplayingCards from '../helpers/optionForDisplayingCards';

const CreateSimpleBlock = () => {
    return (
        <>
            <section>
                <ComponentDisplayingCards option={optionForDisplayingCards}/>
            </section>
        </>
    );
}


export default CreateSimpleBlock;