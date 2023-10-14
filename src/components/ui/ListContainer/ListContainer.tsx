import React, {PropsWithChildren} from 'react';

import './listContainer.scss';

const ListContainer: React.FC<PropsWithChildren> = ({children}) => {

    return (
        <div className={'list-container'}>
            <h2 className={'list-title'}>Cart</h2>
            <div className={'list-item-list'}>
                {children}
            </div>
        </div>
    );
};

export default ListContainer;
