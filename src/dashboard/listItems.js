import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HistoryIcon from '@material-ui/icons/History';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import EuroIcon from '@material-ui/icons/Euro';
import TranslateIcon from '@material-ui/icons/Translate';
import AcUnitIcon from '@material-ui/icons/AcUnit';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Menu" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Right Now" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <QueryBuilderIcon />
      </ListItemIcon>
      <ListItemText primary="Hourly" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <ListItemText primary="Daily" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Search History" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Quick Links</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <MovieFilterIcon />
      </ListItemIcon>
      <ListItemText primary="Los Angeles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="New York" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AirportShuttleIcon />
      </ListItemIcon>
      <ListItemText primary="Tokyo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EuroIcon />
      </ListItemIcon>
      <ListItemText primary="London" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AcUnitIcon />
      </ListItemIcon>
      <ListItemText primary="Moscow" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TranslateIcon />
      </ListItemIcon>
      <ListItemText primary="Beijing" />
    </ListItem>
  </div>
);
