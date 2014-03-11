/*global window.*/
(function(NS) {
  NS = NS || {};
  var isInBrowser = typeof module === 'undefined' && typeof window !== 'undefined';
  var metadataBuilder = isInBrowser ? NS.Helpers.metadataBuilder : require('./metadata_builder').metadataBuilder;
  var callPostRenderingForEachAttributes =  function(model){
    //Get all the metadatas of the model.
    var metadatas = metadataBuilder.getMetadatas(model);
    //Iterate through each attributes of the model.
  };

})(typeof module === 'undefined' && typeof window !== 'undefined' ? window.Fmk : module.exports);