<?php
/**
 * Plugin Name: Powerful Event Tracking
 * Plugin URI: 
 * Description: The very first plugin that I have ever created.
 * Version: 1.0
 * Author: Peter Jaffray and Pablo Reategui
 * Company: Gustin Quon
 * 
 *
 *
 */

function pp_enqueue($hook) {
	
	// wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
	//
	// create version based on file modification time
	//

	$my_js_ver  = date("ymd-Gis", filemtime( plugin_dir_path( __FILE__ ) . 'js/tracker.js' ));
	$my_css_ver = date("ymd-Gis", filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ));

	wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );

	wp_enqueue_script( 'pp_tracker_js', plugins_url( 'js/tracker.js', __FILE__ ), array(), $my_js_ver );
        wp_register_style( 'pp_css',    plugins_url( 'style.css',    __FILE__ ), false,   $my_css_ver );
	wp_enqueue_style ( 'pp_css' );

}

add_action('wp_enqueue_scripts', 'pp_enqueue');


