import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonMore: {
    borderWidth: 2,
    borderColor: '#FF6666',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  card: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  whiteZoneHaut: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  topComponents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    height: 80,
  },
  mapZoneCenter: {
    position: 'absolute',
    bottom: 180,
    right: 30,
    height: 50,
    width: 50,
    zIndex: 20,
  },
  iconNav: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bigButton: {
    borderWidth: 2,
    borderColor: '#FF6666',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FF6666',
  },
  cardImage: {
    width: 100,
    height: '100%',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
  },
  tagCapsule: {
    backgroundColor: '#FF6666',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  filtreScroll: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  filtreContent: {
    paddingHorizontal: 15,
    alignItems: 'center',
    gap: 10,
  },
  filtreCapsule: {
    backgroundColor: '#ffffffff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  filtreText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  title: {
    fontSize: 30,
    color: '#FF6666',
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  b: {
  color: '#FF6666',
  fontWeight: 'bold',
  fontSize: 16,
  padding: 6,
}
});

export default styles;
