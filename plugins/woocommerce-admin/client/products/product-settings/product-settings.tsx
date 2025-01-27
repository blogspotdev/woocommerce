/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	CheckboxControl,
	Panel,
	PanelBody,
	PanelHeader,
	TextControl,
} from '@wordpress/components';
import { closeSmall, cog } from '@wordpress/icons';
import { Product } from '@woocommerce/data';
import { useFormContext } from '@woocommerce/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getCheckboxTracks } from '../sections/utils';
import { WooHeaderItem } from '~/header/utils';
import './product-settings.scss';

export const ProductSettings = () => {
	const { getCheckboxControlProps, getInputProps } =
		useFormContext< Product >();
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<WooHeaderItem>
			<>
				<Button
					aria-label={ __( 'Settings', 'woocommerce' ) }
					icon={ cog }
					isPressed={ isOpen }
					onClick={ () => setIsOpen( ! isOpen ) }
				/>
				{ isOpen && (
					<Panel className="product-settings__panel">
						<PanelHeader label={ __( 'Settings', 'woocommerce' ) }>
							<Button
								icon={ closeSmall }
								onClick={ () => setIsOpen( false ) }
								aria-label={ __(
									'Close settings',
									'woocommerce'
								) }
							/>
						</PanelHeader>
						<PanelBody title={ __( 'Advanced', 'woocommerce' ) }>
							<CheckboxControl
								label={ __( 'Enable reviews', 'woocommerce' ) }
								{ ...getCheckboxControlProps(
									'reviews_allowed',
									getCheckboxTracks( 'reviews_allowed' )
								) }
							/>
							<TextControl
								label={ __( 'Menu order', 'woocommerce' ) }
								type="number"
								{ ...getInputProps( 'menu_order' ) }
							/>
						</PanelBody>
					</Panel>
				) }
			</>
		</WooHeaderItem>
	);
};
