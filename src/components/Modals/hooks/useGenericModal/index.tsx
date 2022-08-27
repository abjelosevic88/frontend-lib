import React, {useCallback, ReactElement, ReactComponentElement} from 'react'

import usePortal, {Args, Return} from 'react-cool-portal'

type GenericReturn = Return | {
  Modal: Function
}

import * as S from './Styled'

function useGenericModal(options: Args = {}): GenericReturn {
  const {Portal, isShow, hide, ...otherPortalProps}: Return = usePortal({
    defaultShow: false,
    ...options
  })

  const handleOnBackdropClick = useCallback(() => {
    if (options.clickOutsideToHide) {
      hide()
    }
  }, [options.clickOutsideToHide])

  const Modal = useCallback(
    ({children}) => (
      <Portal>
        <S.Wrapper tabIndex={-1}>
          <S.Backdrop onClick={handleOnBackdropClick} />
          <S.ContentWrapper>
            {children}
          </S.ContentWrapper>
        </S.Wrapper>
      </Portal>
    ),
    [isShow]
  )

  return {Modal, isShow, hide, ...otherPortalProps}
}

export default useGenericModal