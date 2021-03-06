import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

import NLUExampleText from './NLUExampleText';

export default function UserUtteredEventViewer({ event }) {
    return (
        <Comment.Content>
            <Comment.Author as='a'>User</Comment.Author>
            <Comment.Metadata>
                <span>{event.timestamp.format('ddd, MMM Do, h:mm:ss a')}</span>
            </Comment.Metadata>
            <Comment.Text>
                <NLUExampleText example={event.example} showIntent />
            </Comment.Text>
            <Comment.Actions>
            </Comment.Actions>
        </Comment.Content>
    );
}

UserUtteredEventViewer.propTypes = {
    event: PropTypes.object.isRequired,
};
