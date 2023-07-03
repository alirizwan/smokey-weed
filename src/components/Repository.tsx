import * as React from 'react';
import { useState } from 'react';

import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { toggleFavorite, isFavorite } from '../utils/repositoryActions';
import { TRepository } from '../types';

type TRepositoryProps = {
  repository: TRepository;
  onFavChange: Function;
}

const OpenNew = styled((props: IconButtonProps) => {
  return <IconButton {...props} />;
})(() => ({
  marginLeft: 'auto'
}));

export default function Repository({ repository, onFavChange }: TRepositoryProps) {

  const [favorite, setFavorite] = useState<boolean>(isFavorite(repository.fullName));

  const handleOpenNew = (url: string) => {
    window.open(url, '_blank')
  };

  const handleFavorite = () => {
    if (favorite) {
      toggleFavorite(repository, false);
      setFavorite(false);
    } else {
      toggleFavorite(repository, true);
      setFavorite(true);
    }

    onFavChange();
  };

  return (
    <Grid item xs={12} sm={6} md={4} xl={3} className='repository'>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label={repository.owner.login} src={repository.owner.avatarUrl}>
              {repository.owner.login.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={repository.fullName}
          subheader={repository.createdAt}
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.secondary" noWrap>
              {repository.description || 'No Description.'}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip icon={<StarBorderIcon />} label={repository.stars} variant="outlined" size="small" />
              <Chip icon={<ForkLeftIcon />} label={repository.forks} variant="outlined" size="small" />
              <Chip icon={<VisibilityIcon />} label={repository.watchers} variant="outlined" size="small" />
              { repository.language && <Chip label={repository.language} variant="outlined" size="small" /> }
            </Stack>
          </Stack>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Favorite" onClick={() => handleFavorite()}>
            { favorite ? <FavoriteIcon color='error' /> : <FavoriteBorderIcon /> }
          </IconButton>
          <OpenNew aria-label="Open" onClick={() => handleOpenNew(repository.htmlUrl)}><OpenInNewIcon /></OpenNew>
        </CardActions>
      </Card>
    </Grid>
  );
}
