import {
  ContentTag,
  InPlaceEditingOff,
  provideComponent,
  useData,
} from 'scrivito'
import { DataFormBooleanWidget } from './DataFormBooleanWidgetClass'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import './DataFormBooleanWidget.scss'

provideComponent(DataFormBooleanWidget, ({ widget }) => {
  const dataItem = useData().dataItem()

  const id = ['DataFormBooleanWidget', widget.id(), dataItem?.id()].join('-')

  const attributeName = widget.get('attributeName')
  const attributeValue = dataItem?.get(attributeName)
  const defaultChecked = !!(attributeValue ?? widget.get('defaultValue'))

  const classNames = ['data-form-boolean-widget', 'mb-3', 'form-check']
  if (widget.get('style') === 'switch') classNames.push('form-switch')

  return (
    <div
      className={classNames.join(' ')}
      key={[id, attributeName, defaultChecked].join('-')}
    >
      <input
        id={id}
        className="form-check-input"
        name={attributeName}
        type="checkbox"
        required={widget.get('required')}
        defaultChecked={defaultChecked}
      />{' '}
      <ContentTag
        content={widget}
        attribute="label"
        tag="label"
        className="form-label form-check-label"
        htmlFor={id}
      />
      {widget.get('required') ? (
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover>
              <Popover.Body>mandatory</Popover.Body>
            </Popover>
          }
        >
          <span className="text-mandatory">*</span>
        </OverlayTrigger>
      ) : null}
      {widget.get('helpText') ? (
        <>
          {' '}
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover>
                <Popover.Body>
                  <InPlaceEditingOff>
                    <ContentTag content={widget} attribute="helpText" />
                  </InPlaceEditingOff>
                </Popover.Body>
              </Popover>
            }
          >
            <i className="bi bi-question-circle"></i>
          </OverlayTrigger>
        </>
      ) : null}
    </div>
  )
})
