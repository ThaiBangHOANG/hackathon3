import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { UpvoteButton, DownvoteButton } from './VoteButtons';
import { notify } from '../reducers/notificationReducer';
import EditDeleteMenu from './EditDeleteMenu';
import getEditedThumbail from '../utils/cloudinaryTransform';
import { trimLink, prettifyLink, fixUrl } from '../utils/formatUrl';
import TimeAgo from 'timeago-react';
import getErrorMsg from '../utils/getErrorMsg';

import {
  Paper,
  Typography,
  useMediaQuery,
  CardMedia,
  Link,
  Button,
} from '@material-ui/core';
import { useCardStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import LinkIcon from '@material-ui/icons/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CommentIcon from '@material-ui/icons/Comment';

const PostCard = ({ post, toggleUpvote, toggleDownvote }) => {
  const {
    id,
    title,
    postType,
    textSubmission,
    linkSubmission,
    imageSubmission,
    subreddit,
    author,
    upvotedBy,
    downvotedBy,
    pointsCount,
    commentCount,
    createdAt,
    updatedAt,
  } = post;

  const classes = useCardStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();
  const { user, darkMode } = useSelector((state) => state);

  const isUpvoted = user && upvotedBy.includes(user.id);
  const isDownvoted = user && downvotedBy.includes(user.id);

  const handleUpvoteToggle = async () => {
    try {
      if (isUpvoted) {
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, downvotedBy));
      } else {
        const updatedUpvotedBy = [...upvotedBy, user.id];
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, updatedDownvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const handleDownvoteToggle = async () => {
    try {
      if (isDownvoted) {
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, upvotedBy));
      } else {
        const updatedDownvotedBy = [...downvotedBy, user.id];
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, updatedUpvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), 'error'));
    }
  };

  const linkToShow =
    postType === 'Link'
      ? linkSubmission
      : postType === 'Image'
      ? imageSubmission.imageLink
      : '';

  const formattedLink = trimLink(prettifyLink(linkToShow), 30);

  return (
    <Paper className={classes.root} variant='outlined'>
      <div className={classes.votesWrapper}>
        <UpvoteButton
          user={user}
          body={post}
          handleUpvote={handleUpvoteToggle}
          size={isMobile ? 'small' : 'medium'}
        />
        <Typography
          variant='body1'
          style={{
            color: isUpvoted
              ? '#FF8b60'
              : isDownvoted
              ? '#9494FF'
              : darkMode
              ? '#e4e4e4'
              : '#333',
            fontWeight: 600,
          }}
        >
          {pointsCount}
        </Typography>
        <DownvoteButton
          user={user}
          body={post}
          handleDownvote={handleDownvoteToggle}
          size={isMobile ? 'small' : 'medium'}
        />
      </div>
      <div className={classes.thumbnailWrapper}>
        {postType === 'Text' ? (
          <RouterLink to={`/comments/${id}`}>
            <Paper elevation={0} square className={classes.thumbnail}>
              <MessageIcon
                fontSize='inherit'
                className={classes.thumbnailIcon}
                style={{ color: '#787878' }}
              />
            </Paper>
          </RouterLink>
        ) : postType === 'Link' ? (
          <a href={fixUrl(linkSubmission)} target='_noblank'>
            <Paper elevation={0} square className={classes.thumbnail}>
              <LinkIcon
                fontSize='inherit'
                className={classes.thumbnailIcon}
                style={{ color: '#787878' }}
              />
            </Paper>
          </a>
        ) : (
          <Paper elevation={0} square className={classes.thumbnail}>
            <CardMedia
              className={classes.thumbnail}
              title={title}
              component='a'
              href={'none'}
              target='_noblank'
            />
          </Paper>
        )}
      </div>

      <div
        style={{
          border: '1px solid #1dbf73',
          borderRadius: '15px',
          marginBottom: '20px',
          display: 'flex',
          width: '500px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div>
            {' '}
            <img
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '100%',
              }}
              src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png '
              alt=' '
            />{' '}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h1> {post.title}</h1>
            <p>
              {' '}
              {post.author.username} realised for {post.title}{' '}
              <em>Date : {post.createdAt} </em> {console.log(post)}
            </p>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default PostCard;
