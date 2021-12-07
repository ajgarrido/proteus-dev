export default ({ store, route, redirect }) => {

  store.app.router.beforeEach(function(to, from, next){

    //console.log("middleware");

    /*if(to.fullPath == "/es" || to.fullPath == "/qu" || to.fullPath == "/ay"){
      store.commit('setSchedule', true);
    }else{
      store.commit('setSchedule', false);
    }*/

    /*if(to.fullPath == "/es/teaser" || to.fullPath == "/qu/teaser" || to.fullPath == "/ay/teaser"){
      store.commit('setTeaser', false);
    }else{
      store.commit('setTeaser', true);
    }*/

    /*if(to.fullPath == "/es/cancion" || to.fullPath == "/qu/cancion" || to.fullPath == "/ay/cancion"){
      store.commit('setCancion', false);
    }else{
      store.commit('setCancion', true);
    }*/

    /*if(to.fullPath == "/es/cancion" || to.fullPath == "/es/documental" || to.fullPath == "/qu/cancion" || to.fullPath == "/qu/documental" || to.fullPath == "/ay/cancion" || to.fullPath == "/ay/documental"){
      store.commit('setCancion', false);
    }else{
      store.commit('setCancion', true);
    }*/

    next();
  })

}